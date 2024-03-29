import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToHistory } from "../redux/actions/contentActions";
import { RiDeleteBin2Line } from "react-icons/ri"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toggleTag } from "../redux/actions/filterActions";
import { useSelector } from "react-redux";

const ContentCard = ({ content }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filter);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeClass = "text-white  bg-indigo-500 border-white";


  const handleReadMore=()=>{
    dispatch(addToHistory(content));
    navigate(`/read/${content._id}`);
  }

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={content._id}
    >
      {/* <div>{content.quantity}</div> */}
      <div className='h-52 w-52 mx-auto'>
        <img src={content.image} alt={content.model} />
      </div>
      <h1 className='font-bold text-center'>{content.heading}</h1>
      {/* <p className='text-center font-semibold mb-3'>Rating: {content.rating}</p> */}
      <div className=' flex-1'>
        {/* <ul className='space-y-2'>
          {content.keyFeature.map((feature, index) => {
            return <li key={index} className='text-sm '>{feature}</li>;
          })}
        </ul> */}
        <p>
          {content.content.slice(0, 100)}
        </p>
      </div>
      <div className=''>
        {content.tags.map((tag, index) => {
          return <button key={index} onMouseDown={() => dispatch(toggleTag(tag))} className={`border px-2 py-1 rounded-full text-xs mr-2 ${filters?.tags?.includes(tag) ? activeClass : null}`}>{tag}</button>;
        })}
      </div>
      <div className='flex gap-2 mt-5'>
        
          <button onClick={handleReadMore} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            <Link to='/read/:id'>Read More</Link>
          </button>
        {/* {!pathname.includes('cart') &&
          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>} */}
      </div>
    </div>
  );
};

export default ContentCard;