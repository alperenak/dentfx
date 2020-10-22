import React, { useMemo, useState, useCallback } from "react";
import styles from "./dragDrop.module.scss";
import { useDropzone } from "react-dropzone";
/* import Button from "../../Button/button";
 */
export default function DropzoneField(props) {
  const [file, setFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    props.onFileChange(acceptedFiles);
    return <li key={acceptedFiles.path}>{acceptedFiles.path}</li>;
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    open,
    isDragReject,
  } = useDropzone({ noClick: true, onDrop });

  const files = acceptedFiles.map((file) => {
    return <li key={file.path}>{file.path}</li>;
  });

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#909ab2",
    outline: "none",
    transition: "border .24s ease-in-out",
    width: "100%",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section className={styles.container}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag and drop your file or</p>

        <button className={styles.choose} onClick={open}>
          Choose
        </button>
      </div>
      <aside className={styles.Aside}>
        <div className={styles.fileName}>{files}</div>
      </aside>
    </section>
  );
}

function getRequest(file) {
  const token = GetToken();
  const formdata = new FormData();
  formdata.append("text", file);
  formdata.append("name", "Alperen Karaguzel");
  console.log(formdata);

  uploadFile(token, file)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => alert(e));
}
