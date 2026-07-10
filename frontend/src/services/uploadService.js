import { api } from "./api";

const API = "http://localhost:8787";

export function uploadImages(files) {

    const formData = new FormData();

    files.forEach(file => {

        formData.append(
            "files",
            file
        );

    });

    return api(`${API}/upload`, {

        method: "POST",

        body: formData

    });

}

export function deleteImage(filename) {

    return api(`${API}/upload`, {

        method: "DELETE",

        body: {

            filename

        }

    });

}