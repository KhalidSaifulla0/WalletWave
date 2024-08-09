"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { TextInput } from "@repo/ui/textInput";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export const SendMoney = () => {
  const [number, setNumber] = useState("");
  const [value, setValue] = useState("");

  return (
    <div>
      <Card title="Send Money">
        <div className="w-full">
          <TextInput
            label={"Number"}
            placeholder={"Number"}
            onChange={(num) => {
              setNumber(num);
            }}
          />

          <TextInput
            label={"Amount"}
            placeholder={"Amount"}
            onChange={(val) => {
              setValue(val);
            }}
          />

          <div className="flex justify-center pt-4">
            <Button
              onClick={async () => {
                p2pTransfer(number, Number(value) * 100);
              }}
            >
              Send Money
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
