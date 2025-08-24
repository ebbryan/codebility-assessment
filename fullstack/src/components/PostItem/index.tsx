import React from "react";
import CalendarIcon from "../Icon/Calendar";
import { PostsDataType } from "@/types/posts.type";

const PostItem = ({ postData }: { postData: PostsDataType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {postData.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {postData.excerpt}
        </p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {new Date(postData.date).toLocaleDateString()}
        </div>

        <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PostItem;
