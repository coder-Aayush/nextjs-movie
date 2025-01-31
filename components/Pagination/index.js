import Image from "next/image";
import {
  Container,
  PaginationButtonFirst,
  PaginationButtonSecond,
} from "./style";

function index({ moviesData, onClick }) {
  const currentPage = moviesData?.page;
  const totalPage = moviesData?.total_pages;

  if (!moviesData) {
    return null;
  }

  return (
    <Container currentPage={currentPage} totalPage={totalPage}>
      {currentPage !== 1 && (
        <PaginationButtonFirst
          currentPage={currentPage}
          onClick={() => {
            onClick(currentPage - 1);
          }}
        >
          <span>
            <Image
              src="/arrow-left.svg"
              alt="Picture of the author"
              width={14}
              height={14}
            />
            Page {currentPage - 1}
          </span>
        </PaginationButtonFirst>
      )}

      {currentPage !== totalPage && (
        <PaginationButtonSecond
          onClick={() => {
            onClick(currentPage + 1);
          }}
        >
          <span>
            Page {currentPage === 1 ? currentPage + 1 : currentPage + 1}
            <Image
              src="/arrow-right.svg"
              alt="Picture of the author"
              width={14}
              height={14}
            />
          </span>
        </PaginationButtonSecond>
      )}
    </Container>
  );
}

export default index;
