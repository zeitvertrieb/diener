export default function PicspaceLink() {
  return (
    <div className="fixed z-50 bottom-0 inset-x-0 h-24 flex justify-center items-center">
      <a
        href="http://picspace.io/"
        target="_blank"
        className="inline-flex items-center px-10 py-3 border border-transparent text-xl font-semibold rounded-full shadow-sm text-white bg-primary hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
      >
        <span>Bilder suchen</span>
      </a>
    </div>
  );
}
