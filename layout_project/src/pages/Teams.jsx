import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Teams = () => {
  // mock-up data
  const persons = [
    {
      userId: "100001",
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      team: "Development",
    },
    {
      userId: "100002",
      name: "Jane Smith",
      username: "janesmith",
      email: "janesmith@example.com",
      team: "Marketing",
    },
    {
      userId: "100003",
      name: "Alice Johnson",
      username: "alicej",
      email: "alicej@example.com",
      team: "Design",
    },
    {
      userId: "100004",
      name: "Bob Brown",
      username: "bobb",
      email: "bobb@example.com",
      team: "Finance",
    },
    {
      userId: "100005",
      name: "Charlie White",
      username: "charliew",
      email: "charliew@example.com",
      team: "HR",
    },
    {
      userId: "100006",
      name: "Diana Green",
      username: "dianag",
      email: "dianag@example.com",
      team: "Sales",
    },
    {
      userId: "100007",
      name: "Ethan Black",
      username: "ethanb",
      email: "ethanb@example.com",
      team: "IT Support",
    },
    {
      userId: "100008",
      name: "Fiona Davis",
      username: "fionad",
      email: "fionad@example.com",
      team: "Legal",
    },
    {
      userId: "100009",
      name: "George Harris",
      username: "georgeh",
      email: "georgeh@example.com",
      team: "Operations",
    },
    {
      userId: "100010",
      name: "Hannah Lee",
      username: "hannahl",
      email: "hannahl@example.com",
      team: "Quality Assurance",
    },
    {
      userId: "100011",
      name: "Ian Walker",
      username: "ianw",
      email: "ianw@example.com",
      team: "Training",
    },
    {
      userId: "100012",
      name: "Jessica Adams",
      username: "jessicaa",
      email: "jessicaa@example.com",
      team: "Customer Support",
    },
    {
      userId: "100013",
      name: "Kevin Turner",
      username: "kevint",
      email: "kevint@example.com",
      team: "R&D",
    },
    {
      userId: "100014",
      name: "Liam Martinez",
      username: "liamm",
      email: "liamm@example.com",
      team: "Strategy",
    },
  ];

  const nevigate = useNavigate();

  const moreDetail = (userId) => {
    console.log("go to user:", userId);
    nevigate(`/teams/${userId}`);
  };

  const UsersContext = createContext(persons);

  return (
    <React.Fragment>
      {persons.length ? (
        <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {persons.map((el) => (
            <Card className="w-[320px]" key={el.userId}>
              <CardHeader>
                <CardTitle>{el.username}</CardTitle>
                <CardDescription>{el.email}</CardDescription>
              </CardHeader>
              <CardContent>{el.team}</CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Remove</Button>
                <Button onClick={() => moreDetail(el.userId)}>
                  View details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-slate-400 grid place-items-center">
          Data not found.
        </div>
      )}
    </React.Fragment>
  );
};

export default Teams;
