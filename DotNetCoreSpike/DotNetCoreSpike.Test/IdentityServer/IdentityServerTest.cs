using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using IdentityModel.Client;
using Xunit;

namespace DotNetCoreSpike.UnitTest.IdentityServer
{
    public class IdentityServerTest
    {
        [Fact]
        public async Task ClientCredential_GetToken()
        {
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

            Console.WriteLine(tokenResponse.Json);
            Assert.NotEmpty(tokenResponse.AccessToken);
        }

        [Fact]
        public async Task ClientCredential_AccessResourceWithToken()
        {
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

            var client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            var response = await client.GetAsync("http://localhost:5001/identity");

            Console.WriteLine(await response.Content.ReadAsStringAsync());
            Assert.True(response.IsSuccessStatusCode);
        }

        [Fact]
        public async Task ResourceOwner_GetToken()
        {
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
            var tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync("alice", "password", "api1");

            Console.WriteLine(tokenResponse.Json);
            Assert.NotEmpty(tokenResponse.AccessToken);
        }

        [Fact]
        public async Task ResourceOwner_AccessResourceWithToken()
        {
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
            var tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync("alice", "password", "api1");

            var client = new HttpClient();
            client.SetBearerToken(tokenResponse.AccessToken);

            var response = await client.GetAsync("http://localhost:5001/identity");

            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine(content);
            Assert.True(response.IsSuccessStatusCode);
        }
    }
}
