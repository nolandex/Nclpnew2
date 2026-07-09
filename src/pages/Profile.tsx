import React from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavbar } from "../components/bottom-navbar";
import { TopNavbar } from "../components/top-navbar";
import { LogOut } from "lucide-react";
import { useColor } from "../contexts/ColorContext";

const Profile = () => {
  const navigate = useNavigate();
  const { selectedLang } = useColor();
  const ui = selectedLang.content.ui.profile;

  const handleLogout = () => {
    localStorage.removeItem("isPremium");
    localStorage.removeItem("myCoursesIds");
    navigate("/courses", { replace: true });
  };

  const isPremium = localStorage.getItem("isPremium") === "true";

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <TopNavbar showBack backTo="/courses" backLabel={selectedLang.content.ui.courseDetail.back} />

      <div className="px-4 pt-20 pb-4">
        <h1 className="text-2xl font-bold">{ui.title}</h1>
      </div>

      <div className="px-4 space-y-4">
        <div className="bg-card rounded-2xl p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
            N
          </div>
          <div>
            <p className="font-semibold text-foreground">{ui.user}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isPremium ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
              {isPremium ? ui.premium : ui.free}
            </span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-card rounded-2xl p-4 flex items-center gap-3 text-destructive"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">{ui.logout}</span>
        </button>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Profile;
