import { themes, useThemeContext } from "../../../Context/ThemeContext";
import Skeleton from "@mui/material/Skeleton";
const CardsProgress = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <div
        className={`${
          theme === themes.dark ? "bg-[#363636]" : ""
        } w-full rounded flex justify-between items-center p-2 mb-2`}
      >
        <div className='w-5/6'>
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
        </div>
        <Skeleton variant='rounded' width={40} height={40} />
      </div>
      <div
        className={`${
          theme === themes.dark ? "bg-[#363636]" : ""
        } w-full rounded flex justify-between items-center p-2 mb-2`}
      >
        <div className='w-5/6'>
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
        </div>
        <Skeleton variant='rounded' width={40} height={40} />
      </div>
      <div
        className={`${
          theme === themes.dark ? "bg-[#363636]" : ""
        } w-full rounded flex justify-between items-center p-2 mb-2`}
      >
        <div className='w-5/6'>
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
        </div>
        <Skeleton variant='rounded' width={40} height={40} />
      </div>
      <div
        className={`${
          theme === themes.dark ? "bg-[#363636]" : ""
        } w-full rounded flex justify-between items-center p-2 mb-2`}
      >
        <div className='w-5/6'>
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
          <Skeleton variant='text' sx={{ fontSize: "1rem" }} animation='wave' />
        </div>
        <Skeleton variant='rounded' width={40} height={40} />
      </div>
    </>
  );
};
export default CardsProgress;
