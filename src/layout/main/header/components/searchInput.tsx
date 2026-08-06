import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function SearchInput() {
    return (
        <FormControl className="flex-1 sm:flex-none  sm:w-2/6 md:w-1/2 lg:w-3/12 relative" variant="outlined">
            
            <Input
                disableUnderline
                placeholder="جستجو محصول، دسته بندی ، برند..."
                className="text-sm bg-common-white w-full rounded-lg p-2"
                type={"text"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={"search"}
                            onClick={() => console.log("search***")}
                            edge="end"
                        >
                            <IoIosSearch className="ml-2 size-5 hover:text-primary-main"/>
                        </IconButton>
                    </InputAdornment>
                }
                
            />
           
        </FormControl>
    );
}
