const Message = () => {

    return(
        <section
        className="px-10 mb-10 flex justify-center items-center w-full"
        id="message"
      >
        <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
          <h1 className="text-3xl md:text-4xl text-slate-200 font-medium self-start">
            Drop A Message
          </h1>
          <div className="flex justify-start items-center gap-3 px-5 py-5 rounded-md w-full card">
            <form action="" className="w-full flex flex-col justify-start items-center gap-3">
            <label htmlFor="" className="w-full text-xl font-medium text-slate-200 self-start">Name</label>
            <input type="text" name="" id="" className="w-full text-xl font-medium px-3 py-2 rounded-md outline-none text-slate-300 input"/>
            <label htmlFor="" className="w-full text-xl font-medium text-slate-200 self-start">Email</label>
            <input type="email" name="" id="" className="w-full text-xl font-medium text-slate-300 px-3 py-2 rounded-md outline-none input" />
            <label htmlFor="" className="w-full text-xl font-medium text-slate-200 self-start">Message</label>
            <textarea name="" id="" cols="" rows="3" className="w-full text-xl font-medium text-slate-300 px-3 py-2 rounded-md outline-none input"></textarea>
            <button className="px-5 py-2 mt-2 text-slate-200 border-2 border-cyan-600 bg-transparent hover:bg-cyan-600 rounded-full font-medium text-xl transition ease-in">Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
}

export default Message;