/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Button } from "../../Auth/Components/Component";
import { GetAddColumn } from "../Home.Api";

const AddColumn = () => {
    // const fileInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = async () => {
        await GetAddColumn(selectedFile, textInputRef)
    }
    return (
        <Box>
            <input type="file" onChange={handleFileChange} />
            <input ref={textInputRef} type="text" placeholder="name collumn" />
            <Button onClick={handleSubmit}>Submit</Button>
        </Box>
    );
};

export default AddColumn;
