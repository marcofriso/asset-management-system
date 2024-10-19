const Modal = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`${
        !isOpen ? "invisible" : ""
      } fixed inset-0 flex justify-center items-center shadow-large`}
    >
      <div
        className={`bg-white rounded-lg shadow-md p-5 max-h-[95vh] overflow-y-auto transition-transform transform ease-in-out duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="w-[500px]">
          <div className="flex items-end justify-end">
            <button
              className="flex flex-row items-center hover:text-slate-400"
              onClick={() => setIsOpen(false)}
            >
              <i className="mi-close icon-medium " />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
