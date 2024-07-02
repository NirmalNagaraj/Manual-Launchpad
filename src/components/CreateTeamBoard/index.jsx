import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { useNavigate } from "react-router-dom";

function CreateTeamBoard({setTeamBoards}) {
  const [teamCode, setTeamCode] = useState("");
  const [teamBoardName, setTeamBoardName] = useState("");
  const [teamBoardDesc, setTeamBoardDesc] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  const generateTeamCode = () => {
    setTeamCode(uuidv4());
  };

  const navigateToCreate = () => {
    console.log("Navigating to team board");
    navigate(`/team-boards/${teamCode}`)
  };

  const handleCreate = () => {
    if (!teamBoardName || !teamBoardDesc) {
      toast({
        title: "Please fill in all the fields",
        description: "You can't have a team board without a name, can you?",
        status: "error",
        variant: "destructive",
      });
    } else {
      setTeamBoards((prev) => [
        ...prev,
        { name: teamBoardName, code: teamCode },
      ]);
      toast({
        title: "Team board created!",
        description:
          "You can share the team code for your team members to join",
        action: <ToastAction className="w-12" onClick={navigateToCreate} altText="Go to your Team board">Go to your team boarrd</ToastAction>,
      });
    }
  };
  return (
    <>
      <Drawer>
        <DrawerTrigger
          className="bg-primary hover:bg-primaryLight transition-colors text-white px-4 rounded-md py-2"
          onClick={() => generateTeamCode()}
        >
          Create a new team board
        </DrawerTrigger>
        <DrawerContent className="bg-accent">
          <DrawerHeader>
            <DrawerTitle>Creating new team board</DrawerTitle>
            <DrawerDescription>
              here is your unique team code:
              <span className="font-bold">{teamCode}</span>
              <Button
                onClick={() => navigator.clipboard.writeText(teamCode)}
                className="bg-primary hover:bg-primaryLight transition-colors mx-2 w-12"
              >
                Copy
              </Button>
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 px-12">
            <Label htmlFor="team-board-name" className="font-bold text-xl">
              Team board name:
            </Label>
            <Input
              id="team-board-name"
              placeholder="Enter a name for the team board"
              required
              value={teamBoardName}
              onChange={(e) => setTeamBoardName(e.target.value)}
            />
            <Label htmlFor="team-board-desc" className="font-bold text-xl">
              Description:
            </Label>
            <Input
              id="team-board-desc"
              placeholder="Enter description"
              required
              value={teamBoardDesc}
              onChange={(e) => setTeamBoardDesc(e.target.value)}
            />
          </div>
          <DrawerFooter className="flex flex-col justify-center items-center">
            <Button
              className="bg-primary hover:bg-primaryLight transition-colors w-64"
              onClick={handleCreate}
            >
              Create
            </Button>
            <DrawerClose>
              <Button variant="outline" className="w-64 border-red-500">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CreateTeamBoard;
