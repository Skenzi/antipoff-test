import { ChangeEventHandler, useRef, useState } from "react";
import { updateAvatar } from "../utils/api";
import { useAppDispatch, useAppSelectore } from "../hooks/storeHooks";
import { avatarHandler } from "../store/slices/userSlice";
import { getImageBuffer } from '../utils/filesApi';

interface FileUploadProps {
    classess?: string
}

const UploadFile = ({ classess = '' }: FileUploadProps) => {
    const [fileError, setFileError] = useState<string>('')
    const refInput = useRef<HTMLInputElement>(null)
    const authorizedUser = useAppSelectore((state) => state.userState.user)
    const dispatch = useAppDispatch();

    const triggerChangeAvatar = () => {
        setFileError('')
        if (refInput.current) {
            refInput.current.click()
        }
    }

    const changeAvatar: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.currentTarget.files[0];
        const fileResponse = getImageBuffer(file);
        fileResponse.then((data) => {
            //updateAvatar(authorizedUser.id, file); обновление данных на сервере, reges не принимает
            dispatch(avatarHandler(data))
        }).catch((error) => {
            setFileError(error)
        })
    }

    return <div className={'upload-file-box ' + classess}>
        <input className="upload-file-input" accept="image/png, image/jpeg, image/jpg" type="file" onChange={changeAvatar} ref={refInput} />
        {fileError ? <div className="upload-file-error">{fileError}</div> : null}
        <button className="button upload-file-button" onClick={triggerChangeAvatar}>Изменить аватар</button>
    </div>
}

export default UploadFile;