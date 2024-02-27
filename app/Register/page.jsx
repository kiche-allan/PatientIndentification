import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import wretch from "wretch"
import { ThreeDots } from "react-loading-icons";
import {DeployedURL} from "../components/Constants";
import { useNavigate } from "react-router-dom";

function Register() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [error, setError] = useState("");
    const [imgUploadMsg, setImgUploadMsg] = useState(null);
    const [successMgs, setSuccessMgs] = useState(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const RegisterMutation = useMutation({
        mutationFn: async (data) => {
            wretch(`${DeployedURL}/users/register`)

        }
    })

}
