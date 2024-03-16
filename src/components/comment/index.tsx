import {formatDate} from "@/components/dateTime/formatDate";
import { comment } from "@/types";

const Comment = ({comment}:{comment:comment})=>{
    return(<li className="comment even thread-even depth-1 mb-4" id="comment-515">
    <div id="div-comment-515" className="comment-body nc-CommentCard flex ">
      <div className="comment-author vcard">
        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full mb-2 font-medium leading-tight text-base w-6 text-base mt-4">
          {" "}
          <img
            alt=""
            src="https://secure.gravatar.com/avatar/a6454668c02d718af8b0ae4656357b3d?s=32&d=mm&r=g"
            srcSet="https://secure.gravatar.com/avatar/a6454668c02d718af8b0ae4656357b3d?s=64&d=mm&r=g 2x"
            className="avatar avatar-32 photo"
            height={32}
            width={32}
            decoding="async"
          />
        </div>
      </div>
      <div className="relative flex-grow flex flex-col p-6 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700 overflow-hidden">
        <div className="relative flex items-center pr-6">
          <div className="comment-body__author-link flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100">
            {" "}
            Lig
          </div>{" "}
          <span className="comment-body__dot mx-2">·</span>{" "}
          <a
            className="comment-body__date text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
            href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/#comment-515"
          >
            {" "}
            {formatDate(comment.createdAt)}
          </a>
        </div>
        <div className="!text-sm sm:!text-base prose dark:prose-invert mt-2 mb-3 sm:mt-3 sm:mb-4">
          <p>{comment.content}</p>
        </div>

      </div>
    </div>
  </li>)
}

export default Comment