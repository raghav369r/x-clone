import FeedCard from "@/components/feedCard";
import SideBar from "@/components/sideBar";
import { FaTwitter } from "react-icons/fa";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 h-[100dvh] w-screen max-w-5xl mx-auto">
      <div className="col-span-3">
        <div className="p-2 hover:bg-gray-700 cursor-pointer size-fit rounded-full transition-all">
          <FaTwitter className="text-4xl text-gray-100" />
        </div>
        <SideBar />
        <button className="rounded-full px-4 py-2 bg-blue-600 font-semibold">
          Tweet
        </button>
      </div>
      <div className="col-span-6 border-x-2 h-[100dvh] overflow-y-scroll border-slate-900">
        <FeedCard
          content="Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
          imageLink={""}
          name="Raghav Reddy"
          userAvatar=""
          userName="@raghav369r"
        />
        <FeedCard
          content="Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
          imageLink={""}
          name="Raghav Reddy"
          userAvatar=""
          userName="@raghav369r"
        />{" "}
        <FeedCard
          content="Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
          imageLink={""}
          name="Raghav Reddy"
          userAvatar=""
          userName="@raghav369r"
        />{" "}
        <FeedCard
          content="Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
          imageLink={""}
          name="Raghav Reddy"
          userAvatar=""
          userName="@raghav369r"
        />{" "}
        <FeedCard
          content="Abraham Benjamin de Villiers is a South African former international cricketer, and a current commentator. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019."
          imageLink={""}
          name="Raghav Reddy"
          userAvatar=""
          userName="@raghav369r"
        />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
