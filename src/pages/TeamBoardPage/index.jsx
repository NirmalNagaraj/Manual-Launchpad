import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskBoard from "@/components/TaskBoard";
import MemberBoard from "@/components/MemberBoard";
import DiscussionBoard from "@/components/DiscussionBoard";

function TeamBoardPage() {
  const { teamCode } = useParams();
  const { toast } = useToast();

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex p-4 items-center max-md:flex-col max-md:gap-4">
          <h1 className="font-bold text-2xl flex-1 ml-12">TEAM_BOARD_NAME</h1>
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            consequuntur harum saepe deserunt optio labore laborum eos hic
            perferendis ea placeat, at, explicabo tenetur ipsa earum quia eius
            repellendus tempora.
          </p>
        </div>
        <div className="flex justify-between">
          <span>
            Team board code: {teamCode}{" "}
            <Button
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(teamCode);
                toast({
                  title: "Copied to clipboard",
                  description: "Team board code copied to clipboard",
                });
              }}
              className="mx-2"
            >
              Copy
            </Button>
          </span>
          <Button className="bg-primary hover:bg-primaryLight transition-colors mx-2">
            Edit TeamBoard details
          </Button>
        </div>
        <hr />
        <Tabs defaultValue="tasks" className="w-full">
          <TabsList className="w-full flex">
            <TabsTrigger value="tasks" className="flex-1">
              Tasks
            </TabsTrigger>
            <TabsTrigger value="members" className="flex-1">
              Members
            </TabsTrigger>
            <TabsTrigger value="discussions" className="flex-1">
              Discussion
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <TaskBoard />
          </TabsContent>
          <TabsContent value="members">
            <MemberBoard />
          </TabsContent>
          <TabsContent value="discussions">
            <DiscussionBoard />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default TeamBoardPage;
