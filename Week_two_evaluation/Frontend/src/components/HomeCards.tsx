import { useNavigate } from "react-router-dom";

function HomeCards({ title, navigation }: { title: string; navigation: string }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          navigate(navigation);
        }}
        className="
          w-64
          bg-white/70
          backdrop-blur-lg
          border border-sky-200
          rounded-3xl
          shadow-lg
          p-8
          text-center
          text-xl
          font-semibold
          text-sky-700
          cursor-pointer
          transition-all duration-300
          hover:shadow-2xl
          hover:scale-105
          hover:bg-white/90
          active:scale-95
        "
      >
        {title}
      </button>
    </div>
  );
}

export default HomeCards;
