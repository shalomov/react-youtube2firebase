import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../Components/Form";
import { Loader } from "../Components/Loader";
import { Notes } from "../Components/Notes";
import { FirebaseContext } from "../Context/firebase/firebaseContext";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Form />
      <hr />

      {loading 
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote}/>
      }
    </Fragment>
  );
};
