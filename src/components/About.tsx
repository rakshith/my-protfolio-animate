import Image from "next/image";
import DevImg from "./DevImg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Rakshith Raj S",
  },
  {
    icon: <MailIcon size={20} />,
    text: "rakshith@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "TGHalli 234, 4 cross 4 main Bengaluru 560076",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 933 248 788",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 12 Mar, 1998",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Rakshith Raj S",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Engineering in Computer Science from VTU",
  },
];

const qualitficationData = [
  {
    title: "education",
    data: [
      {
        university: "VTU",
        qualification: "B CSC",
        years: "2015 - 2018",
      },
      {
        university: "DVS independat",
        qualification: "PUC",
        years: "2008 - 2011",
      },
      {
        university: "Karnataka Board",
        qualification: "SSLC",
        years: "2005 - 2008",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Company 1",
        role: "Software Engineer",
        years: "2015 - 2018",
      },
      {
        company: "Company 2",
        role: "Senior Developer",
        years: "2008 - 2011",
      },
      {
        company: "Tech Innovators",
        role: "Tech Lead",
        years: "2005 - 2008",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JavaScript, Java",
      },
      {
        name: "Python, DJango",
      },
      {
        name: "ReactJS, NextJS, NodeJS, NestJS",
      },
      {
        name: "Android, iPhone",
      },
      {
        name: "FrontEnd, Backend",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: any) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="
            bg-about_shape_light 
            w-[505px] h-[505px] bg-no-repeat
            relative 
            dark:bg-about_shape_dark"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 
              xl:max-w-[520px] xl:border dark:border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto "
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className=" w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynaminc and engaging
                      user experience.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Kannada, Hindi, Telugu</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                      text-primary
                      "
                        >
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualitficationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-4">
                          {getData(qualitficationData, "experience").data.map(
                            (item: any, index: number) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                  absolute -left-[5px] 
                                  group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div
                          className="flex gap-x-4 items-center text-[22px]
                      text-primary
                      "
                        >
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualitficationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-4">
                          {getData(qualitficationData, "education").data.map(
                            (item: any, index: number) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary 
                                  absolute -left-[5px] 
                                  group-hover:translate-y-[84px] transition-all duration-500"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: number) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: number) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
