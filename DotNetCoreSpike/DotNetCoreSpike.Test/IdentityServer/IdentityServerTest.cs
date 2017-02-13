using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityModel.Client;
using NUnit.Framework;

namespace DotNetCoreSpike.UnitTest.IdentityServer
{
    [TestFixture]
    public class IdentityServerTest : AssertionHelper
    {
        [Test]
        public async Task GetToken()
        {
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            var tokenClient = new TokenClient(disco.TokenEndpoint, "client", "secret");
            var tokenResponse = await tokenClient.RequestClientCredentialsAsync("api1");

            Console.WriteLine(tokenResponse.Raw);
            Assert.IsNotNull(tokenResponse.AccessToken);
        }
    }
}
