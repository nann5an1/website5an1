import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/magicui/border-beam";
import { div } from "motion/react-client";

function Contact() {
  return (
    <div className="mt-28">
      <div className="w-full h-[1px] bg-[#bed8ff]"></div>
      <div className="flex justify-center mt-12">
        <h1 className="text-3xl font-bold font-serif">WORK WITH ME</h1>  
      </div>
      <div className="flex justify-center mt-16 mb-16 ml-[0.5rem] mr-[0.5rem]">
        <Card className="relative w-[450px] h-[300px] bg-[#b3d2ff] border-none">
          <CardHeader>
            <CardTitle>I would really appreciate any opportunities to work with you.</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input className="bg-[#e2eeff70]" id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Contact</Label>
                  <Input
                   className="bg-[#e2eeff70]"
                    type="phone"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center ">
            <Button type="submit" variant="outline" className="bg-slate-800 text-[#b3d2ff]">Send</Button>
          </CardFooter>
          <BorderBeam duration={10} size={300} />
      </Card>
      </div>
    </div>
  );
}


export default Contact