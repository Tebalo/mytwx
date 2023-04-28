import { useRouter } from "next/router";

const OfferLetter = () => {
    const router = useRouter();
    const {application} = router.query;
    console.log(application);
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Program Offer Letter</h1>
      <p className="mb-4">
        Dear Student,
      </p>
      <p className="mb-4">
        Congratulations! We are pleased to inform you that you have been accepted into our Bsc in Computer science program starting in 2023/05/03. You have shown great potential and we are excited to have you join our community of learners.
      </p>
      <p className="mb-4">
        As a reminder, the cost of tuition for this program is P78456 per year. We offer a variety of financial aid and scholarship options to help make your education more affordable. If you would like to learn more about these options, please contact our financial aid office.
      </p>
      <p className="mb-4">
        To accept this offer, please sign and return the enclosed acceptance letter no later than 2023/04/28.
      </p>
      <p className="mb-4">
        Again, congratulations and we look forward to seeing you soon!
      </p>
      <div className="mt-8">
        Sincerely,<br />
        The University Of Botswana Program Team
      </div>
    </div>
  );
};

export default OfferLetter;