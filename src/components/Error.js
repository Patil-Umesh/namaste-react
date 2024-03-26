const Error = () => {
  const ERROR_IMG =
    "https://media.istockphoto.com/id/685469924/photo/grumpy-pug-with-a-very-sad-face.jpg?s=612x612&w=0&k=20&c=Hg3TFNv38RK6mnRUea2W7Ax8nXhZaMx2hurJSn0YNtE=";
  return (
    <>
      <div className="error-container items-center justify-center mx-[500px] my-20 text-gray-600 text-2xl pl-[90px]">
        <h1 className="error-msg">Oops🙄... Something went wrong🤷‍♂️ !!!</h1>
      </div>
      <img
        className="error-image items-center justify-center mx-[500px]"
        src={ERROR_IMG}
        alt="sad-dog-image"
      />
    </>
  );
};

export default Error;
