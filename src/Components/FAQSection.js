/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
        id: 1,
        question: 'How long will the entire process take?',
        answer: 'This will depend on your needs. We will work with you to create a timeline that works best for you.',
    },
    {
        id: 1,
        question: 'Do you do WordPress websites?',
        answer: 'Yes! We also build web applications, e-commerce stores, super fast landing pages, and more!',
    },
    {
        id: 1,
        question: 'Do I have to pay in full up front?',
        answer: 'No. We require a 50% deposit to start the project. The remaining balance will be paid in full at project completion.',
    },
    {
        id: 1,
        question: 'Do you provide website hosting and domain?',
        answer: 'We do not. We can make recommendations and give helpful resources. We will also help you get set up if you need assistance.',
    },
    {
        id: 1,
        question: 'Will you create content for my website?',
        answer: 'You know your business best, so we will look to you for all content, logos, and photography you wish to include on your website.',
    },
    {
        id: 1,
        question: 'What if I need help in the future?',
        answer: "Don't worry! We're here for you. We offer ongoing maintenance and updates at an hourly rate.",
    },
    // More questions...
];

export default function Example() {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-extrabold text-gray-900 text-center'>Frequently Asked Questions</h2>
                <div className='mt-12'>
                    <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3'>
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className='text-lg leading-6 font-medium text-gray-900'>{faq.question}</dt>
                                <dd className='mt-2 text-base text-gray-500'>{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
