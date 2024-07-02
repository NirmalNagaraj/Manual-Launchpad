import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreateTeamBoard from "@/components/CreateTeamBoard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import AssistantFAB from "@/components/AssistantFAB";

function TeamBoard() {
  const [teamCode, setTeamCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const [teamBoards, setTeamBoards] = useState([
    { name: "SEIGEI", code: "12345" },
    { name: "UDHIRA", code: "67890" },
    { name: "ELECTROAD", code: "54321" },
  ]);

  const joinTeamBoard = () => {
    if (!teamCode) {
      toast({
        title: "Please enter the team code",
        description: "You can't join a team board without the team code",
        status: "error",
        variant: "destructive",
      });
      return;
    } else {
      toast({
        title: "Request sent",
        description: `Wait until the request is accepted by the team board owner`,
        status: "success",
      });
    }
  };
  const navigateTeamBoard = (code) => {
    navigate(`/team-boards/${code}`);
  };
  return (
    <>
      <div className="flex flex-col h-full p-4 pl-12 bg-accent">
        <div className="flex">
          <h1 className="font-bold text-xl">Team Boards</h1>
        </div>
        <div className="flex items-center min-h-[90vh] max-lg:flex-col max-lg:py-12 gap-4">
          <div className="flex-1 w-full">
            <Card>
              <CardHeader>
                <CardTitle>Your Teamboards</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {teamBoards.map((teamBoard) => (
                  <div
                    key={teamBoard.code}
                    className="flex justify-end bg-primary text-white px-4 py-2 rounded-lg items-center"
                  >
                    <span className="flex-grow">{teamBoard.name}</span>
                    <Button
                      className="bg-secondary hover:bg-secondaryDark"
                      onClick={() => {
                        navigateTeamBoard(teamBoard.code);
                      }}
                    >
                      View
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Create -OR- Join</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex-1 flex justify-center p-4">
                  <CreateTeamBoard setTeamBoards={setTeamBoards} />
                </div>
                <hr className="m-4 border-2 border-black" />
                <div className="flex flex-col justify-center items-center px-12 gap-8">
                  <Label
                    htmlFor="team-board-code"
                    className="font-bold text-xl"
                  >
                    Team board code:
                  </Label>
                  <Input
                    type="text"
                    className="w-48"
                    placeholder="Enter the unique code here"
                    value={teamCode}
                    onChange={(e) => setTeamCode(e.target.value)}
                  />
                  <Button
                    className="bg-primary hover:bg-primaryLight transition-colors"
                    onClick={joinTeamBoard}
                  >
                    Request to join team board
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <AssistantFAB />
    </>
  );
}

export default TeamBoard;
