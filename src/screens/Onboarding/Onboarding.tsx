import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Pencil, Sparkles, ArrowUp, ImagePlus, Figma, Plus, Settings, CreditCard, HelpCircle, LogOut, Monitor, Sun, Moon } from "lucide-react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { MobileDrawer } from "../../components/MobileDrawer";
import { Footer } from "../../components/Footer";
import { cn, getTimeOfDay } from "../../lib/utils";
import { useTheme } from "../../components/ThemeProvider";

export const Onboarding = (): JSX.Element => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isPanelPinned, setIsPanelPinned] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const timeOfDay = getTimeOfDay();
  const { theme, setTheme } = useTheme();

  const handlePanelToggle = () => {
    if (!isPanelPinned) {
      setIsPanelPinned(true);
      setIsPanelOpen(true);
    } else {
      setIsPanelPinned(false);
      setIsPanelOpen(false);
    }
  };

  const mainCards = [
    {
      title: "Designer Pilot",
      description: "Create a website like a portfolio, e-commerce store, or anything you can think of",
      icon: <Pencil className="w-6 h-6" />
    },
    {
      title: "Component Builder",
      description: "Design and manage your components and upload them to a library like Storybook",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-neutral-900">
      <SidePanel 
        isOpen={isPanelOpen} 
        isPanelPinned={isPanelPinned}
        onPinClick={handlePanelToggle}
        onMouseEnter={() => !isPanelPinned && setIsPanelOpen(true)}
        onMouseLeave={() => !isPanelPinned && setIsPanelOpen(false)}
        className="hidden md:flex"
      />
      
      <header className="h-14 flex items-center justify-between px-4">
        <Link 
          to="/onboarding" 
          className={cn(
            "transition-opacity duration-300",
            isPanelPinned && "opacity-0"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 60 24" fill="none">
            <path d="M0 19.3236V3.48741H10.2049V5.71935H2.48285V10.4808H9.36329V12.7128H2.48285V19.3236H0Z" className="fill-[#373735] dark:fill-[#FAFAFA]"/>
            <path d="M16.6085 19.5786C15.5144 19.5786 14.5114 19.3165 13.5996 18.7921C12.7019 18.2678 11.9865 17.5522 11.4534 16.6452C10.9204 15.7383 10.6539 14.7109 10.6539 13.563C10.6539 12.401 10.9204 11.3736 11.4534 10.4808C11.9865 9.57387 12.7019 8.86532 13.5996 8.35516C14.4974 7.83083 15.5003 7.56867 16.6085 7.56867C17.7307 7.56867 18.7336 7.83083 19.6174 8.35516C20.5151 8.86532 21.2235 9.57387 21.7425 10.4808C22.2756 11.3736 22.5421 12.401 22.5421 13.563C22.5421 14.725 22.2756 15.7595 21.7425 16.6665C21.2095 17.5734 20.4941 18.2891 19.5963 18.8134C18.6986 19.3236 17.7026 19.5786 16.6085 19.5786ZM16.6085 17.3467C17.2818 17.3467 17.878 17.1837 18.397 16.8578C18.916 16.5319 19.3228 16.0855 19.6174 15.5186C19.926 14.9376 20.0803 14.2857 20.0803 13.563C20.0803 12.8403 19.926 12.1955 19.6174 11.6287C19.3228 11.0618 18.916 10.6154 18.397 10.2895C17.878 9.96358 17.2818 9.80061 16.6085 9.80061C15.9492 9.80061 15.353 9.96358 14.82 10.2895C14.301 10.6154 13.8872 11.0618 13.5786 11.6287C13.284 12.1955 13.1367 12.8403 13.1367 13.563C13.1367 14.2857 13.284 14.9376 13.5786 15.5186C13.8872 16.0855 14.301 16.5319 14.82 16.8578C15.353 17.1837 15.9492 17.3467 16.6085 17.3467Z" className="fill-[#373735] dark:fill-[#FAFAFA]"/>
            <path d="M24.2321 19.3236V7.82375H26.5045V10.1407L26.2941 9.80061C26.5466 9.04954 26.9534 8.51104 27.5145 8.18511C28.0756 7.845 28.7489 7.67495 29.5345 7.67495H30.2288V9.86438H29.2399C28.4544 9.86438 27.8161 10.1124 27.3252 10.6084C26.8482 11.0902 26.6098 11.7846 26.6098 12.6915V19.3236H24.2321Z" className="fill-[#373735] dark:fill-[#FAFAFA]"/>
            <path d="M36.7159 24C35.8883 24 35.1238 23.8654 34.4224 23.5961C33.721 23.3269 33.1179 22.9513 32.6129 22.4695C32.1079 22.0019 31.7292 21.4492 31.4767 20.8115L33.6649 19.8975C33.8613 20.436 34.219 20.8824 34.738 21.2366C35.2711 21.5909 35.9233 21.7681 36.6948 21.7681C37.298 21.7681 37.8381 21.6476 38.315 21.4067C38.7919 21.18 39.1707 20.8399 39.4512 20.3864C39.7318 19.9471 39.8721 19.4157 39.8721 18.7921V16.1988L40.2929 16.6877C39.9001 17.4246 39.353 17.9844 38.6517 18.367C37.9643 18.7496 37.1858 18.9409 36.3161 18.9409C35.2641 18.9409 34.3172 18.6929 33.4756 18.197C32.6339 17.701 31.9676 17.0208 31.4767 16.1563C30.9997 15.2919 30.7613 14.3212 30.7613 13.2442C30.7613 12.153 30.9997 11.1823 31.4767 10.332C31.9676 9.48176 32.6269 8.80864 33.4545 8.31265C34.2821 7.81666 35.229 7.56867 36.2951 7.56867C37.1648 7.56867 37.9363 7.75998 38.6096 8.1426C39.2969 8.51104 39.858 9.04954 40.2929 9.7581L39.9773 10.3533V7.82375H42.2287V18.7921C42.2287 19.7841 41.9902 20.6698 41.5133 21.4492C41.0504 22.2428 40.4051 22.8663 39.5775 23.3198C38.7499 23.7733 37.796 24 36.7159 24ZM36.5896 16.709C37.2209 16.709 37.782 16.5602 38.2729 16.2626C38.7639 15.9508 39.1496 15.5399 39.4302 15.0297C39.7248 14.5054 39.8721 13.9173 39.8721 13.2654C39.8721 12.6136 39.7248 12.0255 39.4302 11.5011C39.1356 10.9768 38.7428 10.5658 38.2519 10.2683C37.7609 9.95649 37.2068 9.80061 36.5896 9.80061C35.9444 9.80061 35.3693 9.95649 34.8643 10.2683C34.3593 10.5658 33.9595 10.9768 33.6649 11.5011C33.3844 12.0113 33.2441 12.5994 33.2441 13.2654C33.2441 13.9031 33.3844 14.4841 33.6649 15.0085C33.9595 15.5328 34.3593 15.9508 34.8643 16.2626C35.3693 16.5602 35.9444 16.709 36.5896 16.709Z" className="fill-[#373735] dark:fill-[#FAFAFA]"/>
            <path d="M49.725 19.5786C48.5888 19.5786 47.5789 19.3165 46.6951 18.7921C45.8254 18.2536 45.1451 17.5309 44.6541 16.624C44.1632 15.7028 43.9177 14.6754 43.9177 13.5418C43.9177 12.3797 44.1632 11.3523 44.6541 10.4596C45.1591 9.56679 45.8324 8.86532 46.6741 8.35516C47.5157 7.83083 48.4696 7.56867 49.5357 7.56867C50.3913 7.56867 51.1558 7.71746 51.8292 8.01506C52.5025 8.31265 53.0706 8.72361 53.5335 9.24794C53.9964 9.7581 54.3471 10.3462 54.5855 11.0122C54.838 11.6783 54.9643 12.3868 54.9643 13.1379C54.9643 13.3221 54.9573 13.5134 54.9432 13.7118C54.9292 13.9102 54.9012 14.0944 54.8591 14.2645H45.7904V12.3514H53.5124L52.3762 13.2229C52.5165 12.5285 52.4674 11.9121 52.2289 11.3736C52.0045 10.8209 51.6538 10.3887 51.1769 10.0769C50.714 9.75101 50.1669 9.58804 49.5357 9.58804C48.9044 9.58804 48.3433 9.75101 47.8524 10.0769C47.3614 10.3887 46.9827 10.8422 46.7162 11.4374C46.4496 12.0184 46.3444 12.7269 46.4006 13.563C46.3304 14.3424 46.4356 15.0226 46.7162 15.6037C47.0107 16.1847 47.4175 16.6381 47.9365 16.9641C48.4696 17.29 49.0728 17.453 49.7461 17.453C50.4334 17.453 51.0156 17.2971 51.4925 16.9853C51.9835 16.6736 52.3692 16.2697 52.6498 15.7737L54.5855 16.7303C54.3611 17.2688 54.0104 17.7577 53.5335 18.197C53.0706 18.6221 52.5095 18.9622 51.8502 19.2173C51.2049 19.4582 50.4966 19.5786 49.725 19.5786Z" className="fill-[#373735] dark:fill-[#FAFAFA]"/>
            <path d="M55.9696 6.80875V4.07163H53.2603V2.70988H55.9696V0H57.3176V2.70988H60V4.07163H57.3176V6.80875H55.9696Z" className="fill-brand-500"/>
          </svg>
        </Link>

        <div className="md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="w-8 h-8 rounded-full bg-stone-950 dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-stone-950 text-sm font-medium">BW</span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="w-[220px] bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-2"
                sideOffset={5}
                align="end"
                style={{ zIndex: 10000 }}
              >
                <div className="px-3 py-2 border-b border-neutral-200 dark:border-neutral-700 mb-2">
                  <div className="font-medium text-stone-950 dark:text-white">Brent</div>
                  <div className="text-sm text-green-600 dark:text-green-500">Pro Personal</div>
                </div>
                
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-stone-950 dark:text-white outline-none cursor-pointer rounded hover:bg-neutral-100/50 dark:hover:bg-white/5">
                  <Settings className="w-4 h-4" />
                  Account Settings
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-stone-950 dark:text-white outline-none cursor-pointer rounded hover:bg-neutral-100/50 dark:hover:bg-white/5">
                  <CreditCard className="w-4 h-4" />
                  Billing & Plans
                </DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className="flex items-center justify-between w-full gap-2 px-3 py-2 text-sm text-stone-950 dark:text-white outline-none cursor-pointer rounded hover:bg-neutral-100/50 dark:hover:bg-white/5">
                    <div className="flex items-center gap-2">
                      {theme === 'light' && <Sun className="w-4 h-4" />}
                      {theme === 'dark' && <Moon className="w-4 h-4" />}
                      {theme === 'system' && <Monitor className="w-4 h-4" />}
                      Theme
                    </div>
                  </DropdownMenu.SubTrigger>
                </DropdownMenu.Sub>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-stone-950 dark:text-white outline-none cursor-pointer rounded hover:bg-neutral-100/50 dark:hover:bg-white/5">
                  <HelpCircle className="w-4 h-4" />
                  Help & Support
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-stone-950 dark:text-white outline-none cursor-pointer rounded hover:bg-neutral-100/50 dark:hover:bg-white/5">
                  <LogOut className="w-4 h-4" />
                  Log out
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-neutral-200 dark:bg-neutral-700 my-2" />
                <div className="px-3 py-2">
                  <button className="w-full px-3 py-2 bg-stone-950 dark:bg-white text-white dark:text-stone-950 text-sm font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-neutral-100">
                    Upgrade Plan
                  </button>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </header>

      <main className={cn(
        "flex-1 flex flex-col items-center",
        isPanelPinned && "ml-0 md:ml-[270px]"
      )}>
        <div className="w-full max-w-[672px] px-4 flex flex-col flex-1">
          <div className="flex-1 flex flex-col gap-10 mt-6 md:mt-[88px]">
            <section className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-[32px] md:text-[36px] font-medium text-black dark:text-white leading-none tracking-[-0.9px]">
                Good {timeOfDay}, Brent
              </h1>
              <p className="text-base text-black dark:text-white leading-7">
                What would you like to ship today?
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainCards.map((card, index) => (
                <button
                  key={index}
                  className="flex flex-col items-start gap-6 p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
                >
                  {card.icon}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl leading-7 font-medium text-black dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-6 font-normal text-neutral-500 dark:text-neutral-400">
                      {card.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="relative w-full bg-neutral-50 dark:bg-neutral-800 flex items-center transition-all duration-200"
                 style={{
                   borderRadius: prompt.split('\n').length > 1 || prompt.length > 50 ? '16px' : '999px',
                 }}>
              <div className="w-full">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask forge to build something..."
                  className="w-full bg-transparent border-none resize-none focus:outline-none focus:ring-0 text-sm text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 min-h-[44px] pr-[80px] md:pr-[160px] text-[16px]"
                  style={{
                    height: '54px',
                    paddingLeft: '16px',
                    paddingTop: '22px',
                    paddingBottom: '12px',
                    lineHeight: '20px',
                    fontFamily: 'Plus Jakarta Sans',
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = '44px';
                    const newHeight = target.scrollHeight;
                    target.style.height = newHeight > 44 ? `${newHeight}px` : '44px';
                  }}
                />
              </div>
              <div className="absolute right-1.5 bottom-0 flex items-center gap-4 px-2 pb-3 h-[44px]">
                <div className="hidden md:flex items-center gap-1">
                  <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors">
                    <Figma className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                  </button>
                  <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors">
                    <ImagePlus className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                  </button>
                </div>

                <button 
                  className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <Plus className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                </button>

                <button 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    prompt.length > 0 
                      ? "bg-brand-500 hover:bg-brand-600" 
                      : "bg-brand-500/40 cursor-not-allowed"
                  )}
                  disabled={prompt.length === 0}
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Sidebar 
        isPanelOpen={isPanelOpen}
        isPanelPinned={isPanelPinned}
        onPanelToggle={handlePanelToggle}
        onMouseEnter={() => !isPanelPinned && setIsPanelOpen(true)}
        onMouseLeave={() => !isPanelPinned && setIsPanelOpen(false)}
        className="hidden md:flex"
      />

      <Footer />

      <MobileDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};