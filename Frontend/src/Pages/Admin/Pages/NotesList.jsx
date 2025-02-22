import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "../../../Contexts/Main_Context";
import { url } from "../../../App";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const NotesList = () => {
  const { getNotes, notes } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNotes = async (id) => {
    if (!id) {
      console.error("Invalid Note ID:", id);
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      console.log(`Deleting note at: ${url}/api/admin/delete_notes/${id}`);

      const response = await axios.delete(`${url}/api/admin/delete_notes/${id}`);
      console.log("Delete response:", response.data);
      toast.success("Notes Deleted Successfully.")
      getNotes();
    } catch (error) {
      console.error("Error deleting note:", error.response?.data || error.message);
      setError("Failed to delete note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <div>
      <ToastContainer/>
      <p className="text-lg font-bold">All Notes List</p>
      {error && <p className="text-red-600">{error}</p>}
      <br />
      <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Url</b>
        <b>Action</b>
      </div>
      <div>
        {notes.map((item) => (
          <div
            className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            key={item._id}
          >
            <img src={item.img} className="w-12" alt={item.title || "Note image"} />
            <p>{item.title}</p>
            <p>{item.desc.slice(0, 50)}</p>
            <a className="underline text-blue-600" href={item.notesUrl} target="_blank" rel="noopener noreferrer">
              Visit notes
            </a>
            <button
              className="cursor-pointer text-red-600 font-bold"
              onClick={() => deleteNotes(item._id)}
              disabled={loading}
            >
              {loading ? "Deleting..." : `X`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
