"use Client";

export default function Lecture({ params }) {
  console.log(params);
  return (
    <div>
      <h1>working</h1>
      <h1>Day of college: {params.lectures[0]}</h1>
      <h2>Lecture NO: {params.lectures[1]}</h2>
      <h3>NO. of classes: {params.lectures[2]}</h3>
      <h3>Student seat number: {params.lectures[3]}</h3>
    </div>
  );
}
