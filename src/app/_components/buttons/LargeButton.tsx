import React from "react";
import SmallPlus from "@/app/_components/icons/SmallPlus";
import Delete from "@/assets/icons/button/x-icon.svg";
import Check from "@/assets/icons/button/check-icon.svg";
import classNames from "classnames";

interface Props {
  title: string;
  isActive: boolean;
  onClick?: (e: React.FormEvent) => void;
}

/**
 * 큰 버튼 컴포넌트
 * @param title : 버튼 텍스트
 * @param isActive : 버튼 활성화 여부
 * @param onClick
 */
const LargeButton: React.FC<Props> = ({ title, isActive, onClick }) => {
  const IconComponent: React.FC = () => {
    switch (title) {
      case "추가하기":
        return (
          <SmallPlus
            className={`${isActive ? "stroke-white" : "stroke-[#0F172A]"}`}
          />
        );
      case "삭제하기":
        return <Delete />;
      case "수정완료":
        return <Check />;
      default:
        return null;
    }
  };

  const buttonClass = classNames(
    "w-[164.35px] h-[56px] flex items-center justify-center border-2 border-slate-900 rounded-3xl nanum-bold-18 relative z-10",
    {
      "bg-slate-200 text-slate-900": !isActive && title !== "삭제하기",
      "bg-rose-500 text-white": title === "삭제하기",
      "bg-violet-600 text-white": isActive && title === "추가하기",
      "bg-lime-300": isActive && title === "수정완료",
    }
  );

  return (
    <button className="relative" onClick={onClick}>
      <div className={buttonClass}>
        <div className="flex items-center gap-1">
          <IconComponent />
          {title}
        </div>
      </div>
      <div className="w-[164.35px] h-[56px] absolute rounded-3xl bg-slate-900 top-1 left-[3.65px]" />
    </button>
  );
};

export default LargeButton;
