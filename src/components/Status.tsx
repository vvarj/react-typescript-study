type StatusProps = {
  message: "loading" | "success" | "error";
};

function Status(props: StatusProps) {
  let messageAlert;
  if (props.message === "loading") {
    messageAlert = "Loading.....";
  } else if (props.message === "success") {
    messageAlert = "Data fetched successfully";
  } else if (props.message === "error") {
    messageAlert === "Data fetch faild. Something went wrong !";
  }
  return (
    <div className="flex items-center justify-center bg-pink-400 min-h-5 p-10 w-[500px] rounded-md drop-shadow-xl">
      <h2 className="text-slate-900 font-semibold">{messageAlert}</h2>
    </div>
  );
}

export default Status;
