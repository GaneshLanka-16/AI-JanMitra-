import { useState } from "react";
import axios from "axios";
import {
  UploadCloud,
  FileImage,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

export default function AadhaarUpload({ onData }) {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/ocr",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        onData(response.data.data);
      } else {
        alert("OCR Failed");
      }
    } catch (err) {
      console.log(err);
      alert("Unable to connect to OCR API");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">

        <div className="flex items-center gap-3">

          <Sparkles size={28} />

          <div>

            <h2 className="text-2xl font-bold">
              AI Aadhaar Verification
            </h2>

            <p className="text-blue-100">
              Upload your Aadhaar and let AI extract details automatically.
            </p>

          </div>

        </div>

      </div>

      {/* Upload Area */}

      <div className="p-8">

        <label className="border-2 border-dashed border-blue-300 rounded-3xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition">

          <UploadCloud
            size={70}
            className="text-blue-600"
          />

          <h2 className="text-2xl font-bold mt-5">
            Drag & Drop Aadhaar
          </h2>

          <p className="text-gray-500 mt-2">
            or Click to Browse
          </p>

          <div className="mt-5 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">

            PNG • JPG • JPEG

          </div>

          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUpload}
          />

        </label>

        {/* Uploaded File */}

        {fileName && !loading && (

          <div className="mt-8 bg-green-50 rounded-2xl p-5 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <FileImage
                className="text-green-600"
                size={32}
              />

              <div>

                <h3 className="font-bold">
                  {fileName}
                </h3>

                <p className="text-green-600">
                  OCR Completed Successfully
                </p>

              </div>

            </div>

            <CheckCircle2
              className="text-green-600"
              size={36}
            />

          </div>

        )}

        {/* AI Loading */}

        {loading && (

          <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center">

            <LoaderCircle
              className="mx-auto animate-spin text-blue-600"
              size={45}
            />

            <h3 className="text-xl font-bold mt-5">

              AI is reading your Aadhaar...

            </h3>

            <p className="text-gray-600 mt-2">

              Extracting Name, Age, Gender, Address and more...

            </p>

            <div className="w-full h-3 bg-gray-200 rounded-full mt-6">

              <div className="w-3/4 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}