import { useState } from "react";
import { Button } from "@/components/ui/button";

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

function TaskBoard() {
  const [unassignedTasks, setUnassignedTasks] = useState([
    {
      name: "Task 1",
    },
    {
      name: "Task 2",
    },
    {
      name: "Task 3",
    },
  ]);
  const [ongoingTasks, setOngoingTasks] = useState([
    {
      name: "Task 4",
    },
    {
      name: "Task 5",
    },
  ]);
  const [finishedTasks, setFinishedTasks] = useState([
    {
      name: "Task 7",
    },
    {
      name: "Task 8",
    },
    {
      name: "Task 9",
    },
    {
      name: "Task 10",
    },
  ]);
  return (
    <>
      <div className="flex justify-evenly gap-4 max-md:flex-col">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Unassigned</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {unassignedTasks.map((task) => (
                <>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div
                        key={task.name}
                        className="flex bg-primary text-white px-4 py-2 rounded-lg items-center"
                      >
                        <span>{task.name}</span>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className=" border-black border-2">
                      <ContextMenuSub>
                        <ContextMenuSubTrigger inset>
                          Assign members
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                          <ContextMenuCheckboxItem checked>
                            Member 1
                          </ContextMenuCheckboxItem>
                          <ContextMenuSeparator />
                          <ContextMenuCheckboxItem>
                            Member 2
                          </ContextMenuCheckboxItem>
                          <ContextMenuSeparator />
                          <ContextMenuCheckboxItem>
                            Member 3
                          </ContextMenuCheckboxItem>
                        </ContextMenuSubContent>
                      </ContextMenuSub>
                      <ContextMenuSeparator />
                      <ContextMenuItem>View discussion thread</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Comment</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Ongoing</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {ongoingTasks.map((task) => (
                <>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div
                        key={task.name}
                        className="flex bg-primary text-white px-4 py-2 rounded-lg items-center"
                      >
                        <span>{task.name}</span>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className=" border-black border-2">
                      <ContextMenuSub>
                        <ContextMenuSubTrigger inset>
                          View members
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                          <ContextMenuCheckboxItem checked>
                            Member 1
                          </ContextMenuCheckboxItem>
                          <ContextMenuSeparator />
                          <ContextMenuCheckboxItem>
                            Member 2
                          </ContextMenuCheckboxItem>
                          <ContextMenuSeparator />
                          <ContextMenuCheckboxItem>
                            Member 3
                          </ContextMenuCheckboxItem>
                        </ContextMenuSubContent>
                      </ContextMenuSub>
                      <ContextMenuSeparator />
                      <ContextMenuItem>View discussion thread</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Comment</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>View progress</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {finishedTasks.map((task) => (
                <>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div
                        key={task.name}
                        className="flex bg-primary text-white px-4 py-2 rounded-lg items-center"
                      >
                        <span>{task.name}</span>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className=" border-black border-2">
                      <ContextMenuItem>Remove task from board</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>View discussion thread</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Archive task</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TaskBoard;
