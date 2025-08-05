import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

function LanguageDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="bg-blue-500 flex items-center rounded-lg px-4 py-2 text-white">
        English
        {open ? (
          <MdKeyboardArrowUp className="ml-2 h-5 w-5" />
        ) : (
          <MdKeyboardArrowDown className="ml-2 h-5 w-5" />
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="rounded-md bg-black p-2 shadow-lg">
        <DropdownMenu.Item className="hover:bg-gray-100 cursor-pointer px-4 py-2">
          English
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:bg-gray-100 cursor-pointer px-4 py-2">
          عربي
        </DropdownMenu.Item>
        <DropdownMenu.Item className="hover:bg-gray-100 cursor-pointer px-4 py-2">
          German
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default LanguageDropdown;
