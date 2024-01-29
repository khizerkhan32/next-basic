import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>StudentList</h1>
      <ul>
        <li>
          <Link href="/studentlist/Sir"> Sir</Link>
        </li>
        <li>
          <Link href="/studentlist/Khizer"> Khizer</Link>
        </li>
        <li>
          <Link href="/studentlist/hadiqa"> hadiqa</Link>
        </li>
        <li>
          <Link href="/studentlist/bisma"> bisma</Link>
        </li>
        <li>
          <Link href="/studentlist/murad"> murad</Link>
        </li>
        <li>
          <Link href="/studentlist/sam"> sam</Link>
        </li>
      </ul>
    </div>
  );
}
