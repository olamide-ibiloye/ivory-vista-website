import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo/Logo";
import Navs from "../navs/Navs";

const Sidebar = () => {
  return (
    <div className="hidden max-lg:flex">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="hidden items-center justify-center max-lg:flex"
          >
            <HamburgerMenuIcon className="icon size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="z-[100] px-10">
          <SheetHeader className="flex">
            <SheetTitle>
              <Logo classes="size-[200px] -ml-4" />
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <Navs vertical />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
