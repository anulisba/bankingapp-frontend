import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Chat from "../pages/Chat";

import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UploadDocuments from "../pages/admin/AdminUpload";
import DocumentLibrary from "../pages/admin/AdminDocuments";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/chat" element={<Chat />} />

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="upload" element={<UploadDocuments />} />
                    <Route path="documents" element={<DocumentLibrary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}