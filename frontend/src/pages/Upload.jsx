import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Trash2,
} from "lucide-react";

export default function Upload() {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const uploaded = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(1),
      status: "Verified",
    }));

    setDocuments((prev) => [...prev, ...uploaded]);
  };

  const removeDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 pt-28 pb-16">

        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-10">

            <h1 className="text-5xl font-black">

              Upload Documents

            </h1>

            <p className="text-gray-600 mt-4">

              Upload your documents for AI-based eligibility verification.

            </p>

          </div>

          {/* Upload Box */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <label className="border-2 border-dashed border-blue-400 rounded-3xl h-72 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

              <UploadCloud
                size={70}
                className="text-blue-600"
              />

              <h2 className="text-2xl font-bold mt-5">

                Drag & Drop Files

              </h2>

              <p className="text-gray-500 mt-2">

                or Click to Browse

              </p>

              <div className="mt-5 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                PDF • JPG • PNG

              </div>

              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleUpload}
              />

            </label>

          </div>

          {/* Uploaded Files */}

          {documents.length > 0 && (

            <div className="bg-white rounded-3xl shadow-xl mt-10 p-8">

              <h2 className="text-3xl font-bold mb-6">

                Uploaded Documents

              </h2>

              <div className="space-y-5">

                {documents.map((doc) => (

                  <div
                    key={doc.id}
                    className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-md transition"
                  >

                    <div className="flex items-center gap-4">

                      <FileText
                        className="text-blue-600"
                        size={35}
                      />

                      <div>

                        <h3 className="font-bold">

                          {doc.name}

                        </h3>

                        <p className="text-gray-500">

                          {doc.size} KB

                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-5">

                      <div className="flex items-center gap-2 text-green-600">

                        <CheckCircle2 size={22} />

                        {doc.status}

                      </div>

                      <button
                        onClick={() => removeDocument(doc.id)}
                        className="text-red-600 hover:text-red-800"
                      >

                        <Trash2 size={22} />

                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>
    </>
  );
}