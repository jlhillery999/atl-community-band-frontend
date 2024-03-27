import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import { base64 } from "base-64";

const secretmanagerClient = new SecretManagerServiceClient();

export default async function getSecret(name: string) {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await secretmanagerClient.accessSecretVersion(request);
    return base64.decode(response[0].payload.data);
}