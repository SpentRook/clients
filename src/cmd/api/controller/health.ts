export class HealthController {
    async health(_req, res) {
        res.status(200).json({ status: "ok" });
    }
}