import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"


describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const SubmitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {}}
        )

        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: 'ele gooosta',
            screenshot: 'test.jpg',
        })).resolves.not.toThrow();
    })
})