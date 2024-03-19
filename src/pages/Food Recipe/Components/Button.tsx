
const Button = ({title}:{title:string}) => {
  return (
    <div>
      <button className="bg-gray-600 text-white rounded-xl px-2 py-1 flex justify-center w-full my-3 items-center">
        {title}
      </button>
    </div>
  );
}

export default Button;
