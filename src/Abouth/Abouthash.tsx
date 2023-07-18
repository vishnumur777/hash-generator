import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import "./Abouth.css";

export default function Abouthash() {
  const nav = useNavigate();
  const handleNGen = () => {
    nav("/generate");
  };
  const handleNVerify = () => {
    nav("/verify");
  };
  return (
    <>
      <h2 style={{ color: "white" }}>FAQ's on Hashing</h2>
      <div className="accord">
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              1. What is hashing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing is a technique for converting a string of data into a
              fixed-length value. This value is called a hash value or hash
              code. Hashing is often used to store and retrieve data in a
              database, as it allows for fast lookups.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              2. What are the benefits of hashing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing has several benefits, including:
              <ul>
                <li>
                  Speed: Hashing allows for fast lookups in a database, as the
                  hash value can be used to quickly find the corresponding data.
                </li>
                <li>
                  Security: Hashing can be used to store sensitive data in a
                  secure way, as the hash value cannot be easily reversed to the
                  original data.
                </li>
                <li>
                  Compactness: Hash values are typically much shorter than the
                  original data, which can save space in a database.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              3. What are the different types of hashing algorithms?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are many different types of hashing algorithms, including:
              <ul>
                <li>
                  MD5: MD5 is a widely used hashing algorithm that is considered
                  to be secure.
                </li>
                <li>
                  SHA-1: SHA-1 is another widely used hashing algorithm that is
                  considered to be secure
                </li>
                <li>
                  SHA-256: SHA-256 is a more recent hashing algorithm that is
                  considered to be even more secure than MD5 and SHA-1.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              4. How does hashing work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing works by using a hash function to convert a string of data
              into a fixed-length value. The hash function is a mathematical
              algorithm that takes the input data and produces a hash value. The
              hash value is typically a number, but it can also be a string of
              characters.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              5. What are the applications of hashing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing has many applications, including:
              <ul>
                <li>Storing and retrieving data in a database.</li>
                <li>Authenticating users.</li>
                <li>Verifying the integrity of data.</li>
                <li>Generating random numbers.</li>
                <li>Indexing data</li>
                <li>Caching data</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              6. How is hashing used in passwords?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing is often used to store passwords in a database. When a
              user enters their password, it is hashed and stored in the
              database. When the user logs in again, their password is hashed
              again and compared to the hashed password in the database. If the
              two hashes match, the user is logged in.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              7. What is the difference between hashing and encryption?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing and encryption are both techniques for converting data
              into a secure form. However, they differ in a few key ways.
              Hashing is a one-way function, meaning that the original data
              cannot be easily recovered from the hash value. Encryption, on the
              other hand, is a two-way function, meaning that the original data
              can be recovered from the encrypted form using a key.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              8. What is the difference between MD5 and SHA-2?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>
                MD5 and SHA-2 are both hashing algorithms that are used to
                convert data into a fixed-length value. However, there are some
                important differences between the two algorithms.
              </p>
              <strong>MD5:</strong>
              <ul>
                <li>MD5 is a 128-bit hash algorithm.</li>
                <li>MD5 was designed in 1991 by Ronald Rivest.</li>
                <li>MD5 is considered to be less secure than SHA-2.</li>
              </ul>
              <strong>SHA2:</strong>
              <ul>
                <li>
                  SHA-2 is a family of hashing algorithms that includes SHA-224,
                  SHA-256, SHA-384, and SHA-512.
                </li>
                <li>
                  SHA-2 was designed in 2001 by the National Security Agency
                  (NSA).
                </li>
                <li>SHA-2 is considered to be more secure than MD5.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              9. What is hash collision and how to prevent it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A hash collision occurs when two different pieces of data have the
              same hash value. This can happen because hash functions are not
              perfect. If a hash collision occurs, it can make it difficult to
              uniquely identify data in a database. There are a few ways to
              prevent hash collisions, including:
              <ul>
                <li>Using a different hash algorithm.</li>
                <li>Increasing the size of the hash value.</li>
                <li>Increasing the size of the hash value.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{
              backgroundColor: "#1C1B1F",
            }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "white" }}>
              10. What are some of the challenges of using hashing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hashing has a few challenges, including:
              <ul>
                <li>
                  Collisions: As mentioned earlier, collisions can occur when
                  two different inputs produce the same hash value. This can
                  make it difficult to uniquely identify data in a hash table.
                </li>
                <li>
                  Security: If the hash algorithm is not secure, it may be
                  possible to reverse the hash value to the original data.
                </li>
                <li>
                  Performance: Hashing can be computationally expensive,
                  especially for large datasets.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="btnGroup">
        <button onClick={handleNGen} className="btn btn-outline-success mr-3">
          Generate
        </button>
        <button onClick={handleNVerify} className="btn btn-outline-info">
          Verify
        </button>
      </div>
      <div className="foot">
        <div>
          <h4>Note:</h4>
          <ul>
            <li>
              To generate hash values for the given word use{" "}
              <strong>Generate</strong> button.
            </li>
            <li>
              You can click on <strong>'Verify'</strong> Button to check the
              hash Value is correct for the given password.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
