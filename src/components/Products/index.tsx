

const SectionProducts = ()=>{
    return (<div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-8 mx-auto rounded-lg pt-4 pb-1 bg-gray-200">
    <h2 className="px-4 text-base font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 sm:px-5 lg:text-lg">
      Top Products
    </h2>
    <div className="scrollbar-sm mt-4 flex space-x-4 overflow-x-auto px-4 pb-4 sm:px-5">
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" alt="Image Description"
        
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">category</span>

            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
             Product 1
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $100
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-warning py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 2
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $80
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-secondary py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 3
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $100
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-info py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 4
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $120
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-warning py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 5
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $90
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-info py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 6
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $100
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-warning py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 6
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $80
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-secondary py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 7
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $100
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-info py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 8
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $120
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-72 shrink-0 flex-col">
        <img
          className="h-48 w-full rounded-2xl object-cover object-center"
          src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
          alt=""
        />
        <div className="card mx-2 -mt-8 grow rounded-2xl p-3.5 bg-white">
          <div className="flex space-x-2">
            <div className="badge rounded-full bg-warning py-1 uppercase text-white">
            category
            </div>
            <div className="flex flex-wrap items-center font-inter text-xs uppercase">
              <p>category</p>
              <div className="mx-2 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500" />
              <p>category</p>
            </div>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-sm+ font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            >
              Product 9
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="mt-2">
              <span className="text-base font-medium text-slate-700 dark:text-navy-100">
                $90
              </span>
              
            </p>
            <button className="flex shrink-0 items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="dark"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}


export default SectionProducts;