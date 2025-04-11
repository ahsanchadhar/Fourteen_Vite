import Image from "next/image";

const reviews = [
  {
    id: 1,
    customer: {
      avatar_url:
        "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      display_name: "John Doe",
    },
    rating: 5,
    heading: "Great product!",
    body: "I love this product! It's amazing.",
    media: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 2,
    customer: {
      avatar_url:
        "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      display_name: "Jane Doe",
    },
    rating: 4,
    heading: "Good product!",
    body: "I like this product! It's good.",
    media: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col gap-8">
      {reviews.map((review) => (
        <div className="flex flex-col gap-4" key={review.id}>
          {/* USER */}
          <div className="flex items-center gap-4 font-medium">
            <Image
              src={review.customer.avatar_url}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{review.customer.display_name}</span>
          </div>
          {/* STARS */}
          <div className="flex gap-2">
            {Array.from({ length: review.rating }).map((_, index) => (
              <Image
                src="/star.png"
                alt=""
                key={index}
                width={16}
                height={16}
              />
            ))}
          </div>
          {/* DESC */}
          {review.heading && <p className="font-semibold">{review.heading}</p>}
          {review.body && <p>{review.body}</p>}
          <div className="flex gap-4">
            {review.media.map((media) => (
              <Image
                src={media.url}
                key={media.id}
                alt=""
                width={100}
                height={50}
                className="object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
