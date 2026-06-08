"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback } from "react";
import { UploadButton } from "@/utils/uploadthing";

export default function Editor({
  content,
  onChange,
}: {
  content: string;
  onChange: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[300px] border border-[#2a2a2a] p-4 rounded-md bg-[#0a0a0a]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const addImage = useCallback(
    (url: string) => {
      if (url && editor) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Editor Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 border border-[#2a2a2a] rounded-md bg-[#111]">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 text-sm rounded ${editor.isActive("bold") ? "bg-[#cc0000] text-white" : "bg-[#2a2a2a] text-gray-300"}`}
          type="button"
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 text-sm rounded ${editor.isActive("italic") ? "bg-[#cc0000] text-white" : "bg-[#2a2a2a] text-gray-300"}`}
          type="button"
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1 text-sm rounded ${editor.isActive("heading", { level: 2 }) ? "bg-[#cc0000] text-white" : "bg-[#2a2a2a] text-gray-300"}`}
          type="button"
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1 text-sm rounded ${editor.isActive("heading", { level: 3 }) ? "bg-[#cc0000] text-white" : "bg-[#2a2a2a] text-gray-300"}`}
          type="button"
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 text-sm rounded ${editor.isActive("bulletList") ? "bg-[#cc0000] text-white" : "bg-[#2a2a2a] text-gray-300"}`}
          type="button"
        >
          Bullet List
        </button>
        <div className="ml-auto">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res && res.length > 0) {
                addImage(res[0].url);
              }
            }}
            onUploadError={(error: Error) => {
              alert(\`ERROR! \${error.message}\`);
            }}
          />
        </div>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
