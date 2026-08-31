import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { KnowledgeBasesPage } from "@/features/knowledge-bases/KnowledgeBasesPage";
import { DocumentsPage } from "@/features/documents/DocumentsPage";
import { EmbeddingsPage } from "@/features/embeddings/EmbeddingsPage";
import { RetrievalPage } from "@/features/retrieval/RetrievalPage";
import { ChatPage } from "@/features/chat/ChatPage";
import { EvaluationsPage } from "@/features/evaluations/EvaluationsPage";
import { PipelinesPage } from "@/features/pipelines/PipelinesPage";
import { SettingsPage } from "@/features/settings/SettingsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="knowledge-bases" element={<KnowledgeBasesPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="embeddings" element={<EmbeddingsPage />} />
        <Route path="retrieval" element={<RetrievalPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="evaluations" element={<EvaluationsPage />} />
        <Route path="pipelines" element={<PipelinesPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
