import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
} from "@/components/ui/context-menu";

function MemberBoard() {
  const [members, setMembers] = useState([
    {
      name: "Varun",
      role: "Leader",
      assigned: true,
      tasks: ["Task 1", "Task 2"],
    },
    {
      name: "Salai",
      role: "Frontend",
      assigned: true,
      tasks: ["Task 1", "Task 2"],
    },
    {
      name: "Rishi",
      role: "DevOps",
      assigned: true,
      tasks: ["Task 1", "Task 2"],
    },
    { name: "Revathi", role: "Backend", assigned: false, tasks: [] },
  ]);
  return (
    <>
      <div className="flex justify-evenly gap-4 flex-wrap">
        {members.map((member) => {
          return (
            <Card
              key={member.name}
              className={
                "text-white w-full " +
                (member.assigned ? "bg-primary" : "bg-secondary")
              }
            >
              <CardHeader className="text-white">
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 text-white">
                <div className="flex gap-2">
                  <img src="https://placehold.co/100x100" />
                  <div>
                    Role: {member.role}{" "}
                    {member.assigned ? (
                      <div>Tasks: {member.tasks.join(", ")}</div>
                    ) : (
                      <div>Not Assigned</div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

    </>
  );
}

export default MemberBoard;
